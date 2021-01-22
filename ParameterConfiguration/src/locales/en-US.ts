export default {
  'BLOCK_NAME.title1': 'Video interview validation',
  'BLOCK_NAME.title2': 'Identity document validation',
  'BLOCK_NAME.title3': 'Connections to third parties',
  'BLOCK_NAME.title4': 'OCR data entry',

  'BLOCK_NAME.op1.title1': 'Face validation',
  'BLOCK_NAME.op1.content1': 'The face of the video interviewed prospect corresponds to a real person, not avatarized, in a real environment, interacting at this moment in time.',
  'BLOCK_NAME.op1.title2': 'OTP',
  'BLOCK_NAME.op1.content2': 'The OTP read by voice by the user is exactly the same as that sent by the identification engine.',

  'BLOCK_NAME.op2.title1': 'ID validation',
  'BLOCK_NAME.op2.content1': 'Document presented meets the security criteria published with the INE / IFE, and is not a copy of it.',
  'BLOCK_NAME.op2.title2': 'ID Face Comparison',
  'BLOCK_NAME.op2.content2': 'Compare the face recorded in the video interview with the face present in the document.' +
    'Due to the quality of the extraction of the video interview document, a low parameter is normally used, to minimize false positives.',

  'BLOCK_NAME.op4.title': 'OCR certainty percentage',
  'BLOCK_NAME.op4.content': 'Defines the minimum certainty percentage, with which the OCR certainty engine takes a value as valid.' +
    'In case of being below this percentage, the recognized fields are marked in another color for later human validation.',

  'BLOCK_NAME.connection.title1': 'INE/CECOBAN',
  'BLOCK_NAME.connection.content1': 'An error when consulting the data with the authority, automatically generates an invalidation of the product request.',
  'BLOCK_NAME.connection.title2': 'Blacklists / AML',
  'BLOCK_NAME.connection.content2': 'An error when querying the data with the risk engine automatically generates an invalidation of the product request.',
  'BLOCK_NAME.radioOp1': 'True',
  'BLOCK_NAME.radioOp2': 'False',
  'BLOCK_NAME.slider.block.placeholder': 'Enter value'
};
