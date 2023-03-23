import joi from 'joi';

const cakeSchema = joi.object({
  name: joi.string().required().min(3),
  price: joi.number().positive().required().min(1),
  description: joi.string().required(),
  image: joi.string().uri().required(),
});

export default cakeSchema;