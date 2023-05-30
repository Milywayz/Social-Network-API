const { Schema, model, Types} = require('mongoose');

// Reaction Schema
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        userName: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => timeSince(date)
        }
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
    }
);

module.exports = ('Reaction', reactionSchema);
