var mongoose = require('mongoose');

var CommentsSchema = mongoose.Schema({
  user: { type: String },
  componentName: { type: String, index: { unique: true } },
  content: { type: String },
  date: Date,
});

var Comments = mongoose.model('Comments', CommentsSchema);
console.log('this Comments in Model: ', Comments);

module.exports= {
  Comments: Comments,
  CommentsSchema: CommentsSchema
}
