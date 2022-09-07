import User from "../models/User";
import { createPasswordHash } from "../services/auth";

class UsersControllers {
  async index(req, res) {
    try {
      const users = await User.find();

      return res.status(200).json(users);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findById(id);

      if (!user) return res.status(404).json({ error: "User not found." });

      return res.status(200).json(user);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }

  async create(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });
      if (user) return res.status(422).json({ error: `User ${email} exists.` });

      // password hash
      const passwordHash = createPasswordHash(password);

      const newUser = await User.create({
        email,
        password: passwordHash,
      });

      return res.status(200).json(newUser);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { email, password } = req.body;

      const user = await User.findById(id);

      if (!user) return res.status(422).json({ error: "User not found" });

      const passwordHash = createPasswordHash(password);

      await user.updateOne({
        email,
        password: passwordHash,
      });

      return res.status(200).json(user);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findById(id);

      if (!user) return res.status(404).json({ error: "User not found" });

      await user.deleteOne()

      return res.status(204).json({ error: "User deleted successfully"})
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
}

export default new UsersControllers();
