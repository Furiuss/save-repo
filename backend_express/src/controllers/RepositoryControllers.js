import User from "../models/User";
import Repository from "../models/Repository";

class RepositoriesController {
  async index(req, res) {
    try {
      const { user_id } = req.params;
      const user = await User.findById(user_id);

      if (!user) return res.status(404).json({ error: "User not found" });

      const repositories = await Repository.find({
        userId: user_id,
      });

      return res.json(repositories);
    } catch (err) {
      console.error(err);
      return res.status(404).json({ error: "Internal server error" });
    }
  }

  async create(req, res) {
    try {
      const { user_id } = req.params;
      const { name, url } = req.body;

      const user = await User.findById(user_id);

      if (!user) return res.status(404).json({ error: "User not found" });

      const repository = await Repository.findOne({
        userId: user_id,
        url,
      });

      if (repository) {
        return res
          .status(422)
          .json({ error: `Respository ${name} already exists` });
      }

      const newRepository = await Repository.create({
        name,
        url,
        userId: user_id,
      });

      return res.status(200).json(newRepository);
    } catch (err) {
      console.error(err);
      return res.status(404).json({ error: "Internal server error" });
    }
  }

  async destroy(req, res) {
    try {
      const { user_id, id } = req.params;
      const user = await User.findById(user_id);

      if (!user) return res.status(404).json({ error: "User not found"})
      
      const repository = await Repository.findOne({
        userId: user.id,
        id,
      })

      if (!repository) return res.status(404).json({ error: "Repo not found"})
      
      await repository.deleteOne()

      return res.status(204).json({sucessful: 'Repo deleted successfully'})
    } catch (err) {
      console.error(err);
      return res.status(404).json({ error: "Internal server error" });
    }
  }
}

export default new RepositoriesController();
