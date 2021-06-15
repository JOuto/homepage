const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  message: String,
});

messageSchema.set('toJSON', {
  transform: (returnedObject) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});
//userSchema.plugin(uniqueValidator);
const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
