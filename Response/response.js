export class validationClass{
    constructor(error, field, field_value, condition, condition_value) 
    {
      this.error = error;
      this.field = field;
      this.field_value = field_value;
      this.condition = condition;
      this.condition_value = condition_value;
    }
}
  
export class dataClass{
    constructor(validationClass)
    {
        this.validation = validationClass;
    }
}

export class responseClass {
    constructor(message, status, dataClass) 
    {
        this.message = message;
        this.status = status;
        this.data = dataClass;
    }
}