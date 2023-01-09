import mongoose from 'mongoose';

const TransferLocal = mongoose.Schema({
  nameSender: {
    type: String,
    required: true,
  },
  nameReceiver: {
    type: String,
    required: true,
  },
  bankSender: {
    type: String,
    required: true,
  },
  bankReceiver: {
    type: String,
    required: true,
  },
  accountNumberReceiver: {
    type: Number,
    required: true,
  },
  totalSent: {
    type: Number,
    required: true,
  },
  transactionTotals: {
    type: Number,
    required: true,
  },
});

export default mongoose.model('TransferLocal', TransferLocal);
