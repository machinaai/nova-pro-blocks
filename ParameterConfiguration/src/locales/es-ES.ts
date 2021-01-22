export default {
  'BLOCK_NAME.title1': 'Validación de videoentrevista',
  'BLOCK_NAME.title2': 'Validación de documento de identidad',
  'BLOCK_NAME.title3': 'Conexiones a terceros',
  'BLOCK_NAME.title4': 'Entrada de datos OCR',

  'BLOCK_NAME.op1.title1': 'Face validation',
  'BLOCK_NAME.op1.content1': 'La cara del prospecto videoentrevistado corresponde a una persona real, no avatarizada, en ambiente real, interactuando en este momento del tiempo.',
  'BLOCK_NAME.op1.title2': 'OTP',
  'BLOCK_NAME.op1.content2': 'El OTP leído por voz por el usuario es exactamente igual al enviado por el motor de identificación.',

  'BLOCK_NAME.op2.title1': 'ID validation',
  'BLOCK_NAME.op2.content1': 'Documento presentado cumple con los criterios de seguridad publicados con el INE/IFE, y no es una copia de la misma.',
  'BLOCK_NAME.op2.title2': 'ID Face Comparison',
  'BLOCK_NAME.op2.content2': 'Compara la cara registrada en la videoentrevista, con la cara presente en el documento. ' +
    'Debido a la calidad de la extracción del documento de la video entrevista normalmente se usa un parámetro bajo, para minimizar los falsos positivos.',

  'BLOCK_NAME.op4.title': 'Porcentaje de certeza OCR',
  'BLOCK_NAME.op4.content': 'Define el porcentaje de certeza mínimo, con el que el motor de certeza OCR ' +
    'toma un valor como válido. En caso de estar debajo de este porcentaje, los campos reconocidos son marcados de otro color ' +
    'para validación humana posterior.',

  'BLOCK_NAME.connection.title1': 'INE/CECOBAN',
  'BLOCK_NAME.connection.content1': 'Un error al cosultar los datos con la autoridad, automáticamente genera una invalidación de la solicitud de producto.',
  'BLOCK_NAME.connection.title2': 'Listas negras/AML',
  'BLOCK_NAME.connection.content2': 'Un error al cosultar los datos con el motor de riesgo, automáticamente genera una invalidación de la solicitud de producto.',
  'BLOCK_NAME.radioOp1': 'Verdadero',
  'BLOCK_NAME.radioOp2': 'Falso',
  'BLOCK_NAME.slider.block.placeholder': 'Ingrese valor'
};

