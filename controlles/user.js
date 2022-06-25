const user = require("../model/user");
exports.Adduser = async (req, res) => {
  try {
    const newuser = new user(req.body);
    await newuser.save();
    res.status(200).send({ msg: "user added", newuser });
  } catch (error) {
    res.status(500).send("couldn't add user");
  }
};
exports.Getusers = async (req, res) => {
  try {
    const users = await user.find();
    res.status(200).send({ msg: "all users", users });
  } catch (error) {
    res.status(500).send("couldn't get users");
  }
};
exports.Deleteuser = async (req, res) => {
  try {
    const deluser = await user.findByIdAndDelete(req.params.id);
    res.status(200).send({ msg: "user deleted", deluser });
  } catch (error) {
    res.status(500).send("could not delete user");
  }
};
exports.Updateuser = async (req, res) => {
  try {
    const edituser = await user.findByIdAndUpdate(
      req.params.id,
      {
        $set: { ...req.body },
      },
      { new: true }
    );
    res.status(200).send({ msg: "user updated", edituser });
  } catch (error) {
    res.status(500).send("couldn't update user");
  }
};
exports.Getoneuser = async (req, res) => {
  try {
    const oneuser = await user.findById(req.params.id);
    res.status(200).send({ msg: "this is u ", oneuser });
  } catch (error) {
    res.status(500).send("couldn't found u");
  }
};
