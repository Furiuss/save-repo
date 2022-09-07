class HomeController {
  async index(req, res) {
    return res.json({ Hello: "world" });
  }
}

export default new HomeController();
