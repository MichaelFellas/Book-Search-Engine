const User = require("../models/User");
const { signToken, authMiddleware } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (!context.user) {
        throw new Error("User is not logged in");
      }

      const user = context.user;

      const foundUser = await User.findOne({
        _id: user._id,
      });

      if (!foundUser) {
        throw new Error("User not found!");
      }
      return foundUser;
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({
        email: email,
      });

      if (!user) {
        throw new Error("Can't find this user");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new Error("Wrong password!");
      }

      const token = signToken(user);
      console.log(token);

      return {
        token,
        user,
      };
    },
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({
        username,
        email,
        password,
      });

      if (!user) {
        throw new Error("Something is wrong!");
      }
      const token = signToken(user);

      return {
        token,
        user,
      };
    },
    saveBook: async (parent, args, context) => {
      try {
        const savingBook = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: { savedBooks: args.bookData },
          },
          {
            new: true,
            runValidators: true,
          }
        );
        return savingBook;
      } catch (err) {
        console.log(err);
      }
    },

    removeBook: async (parent, args, context) => {
      return User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { savedBooks: { bookId: args.bookId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
