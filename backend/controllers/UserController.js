import TransferLocal from '../models/TransferLocalModel.js';

export const getTransferLocal = async (req, res) => {
  try {
    const transferlocal = await TransferLocal.find();
    res.json(transferlocal);
  } catch (error) {
    res.status(500).json({messagge: error.messagge});
  }
};

export const getTransferLocalById = async (req, res) => {
  try {
    const transferlocal = await TransferLocal.findById(req.params.id);
    res.json(transferlocal);
  } catch (error) {
    res.status(404).json({messagge: error.messagge});
  }
};

export const saveTransfer = async (req, res) => {
  const transferlocal = new TransferLocal(req.body);
  try {
    const savetransfer = await transferlocal.save();
    res.status(201).json(transferlocal);
  } catch (error) {
    res.status(400).json({messagge: error.messagge});
  }
};

export const updateTransfer = async (req, res) => {
  try {
    const updatetransfer = await TransferLocal.updateOne(
      {_id: req.params.id},
      {$set: req.body},
    );
    res.status(200).json(updatetransfer);
  } catch (error) {
    res.status(400).json({messagge: error.messagge});
  }
};

export const deleteTransfer = async (req, res) => {
  try {
    const deletetransfer = await TransferLocal.deleteOne({_id: req.params.id});
    res.status(200).json(deletetransfer);
  } catch (error) {
    res.status(400).json({messagge: error.messagge});
  }
};
