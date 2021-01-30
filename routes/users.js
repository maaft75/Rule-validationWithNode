import express, { json } from 'express';

const router = express.Router();
const user = 
[
    {
        message: "My Rule-Validation API",
        status: "success",
        data: 
        {
          name: "Ayodeji Adedeji",
          github: "@maaft75",
          email: "ayodejiadedeji8@gmail.com",
          mobile: "09014105789",
          twitter: "@03blacksuperman"
        }
    }
]

class validationClass{
  constructor(error, field, field_value, condition, condition_value) {
    this.error = error;
    this.field = field;
    this.field_value = field_value;
    this.condition = condition;
    this.condition_value = condition_value;
  }
}

class dataClass{
  constructor(validationClass){
    this.validation = validationClass;
  }
}

class responseClass {
  constructor(message, status, dataClass) {
    this.message = message;
    this.status = status;
    this.data = dataClass;
  }
}

router.get('/', (req, res) => { res.send(user)})

router.post('/validate-rule', (req, res) => 
{
  if(req.body != JSON)
  {
    if(req.body.rule)
    {
      if(req.body.data)
      {
        if(req.body.rule.constructor == ({}).constructor)
        {
            if(req.body.rule["field"] && req.body.rule["condition"] && req.body.rule["condition_value"])
            {
              if(req.body.data[req.body.rule["field"].split('.')[0]])
              {
                if(req.body.rule["field"].split('.')[1])
                {
                  const subObject = req.body.rule["field"].split('.')[1];
                  if(req.body.data[req.body.rule["field"].split('.')[0]][subObject])
                  {
                    if(req.body.rule.condition == "eq")
                    {
                      const r =  req.body.data[[req.body.rule["field"].split('.')[0]]];
                      const s = req.body.rule["field"].split('.')[1];
                      var checkCondition = r[s] == req.body.rule.condition_value;
                      if(checkCondition == true)
                      {
                        let validation = new validationClass(!checkCondition, req.body.rule["field"], r[s], req.body.rule["condition"], req.body.rule["condition_value"]);
                        let data = new dataClass(validation); 
                        let returnResponse = new responseClass(`field ${req.body.rule["field"]} successfully validated.`,"success", data);
                        res.status(200).send( returnResponse );
                      }
                      else if(checkCondition == false)
                      {
                        let validation = new validationClass(!checkCondition, req.body.rule["field"], r[s], req.body.rule["condition"], req.body.rule["condition_value"]);
                        let data = new dataClass(validation); 
                        let returnResponse = new responseClass(`field ${req.body.rule["field"]} failed validation.`,"error", data);
                        res.status(400).send( returnResponse );
                      }
                    }
                    else if(req.body.rule.condition == "gte")
                    {
                      const r =  req.body.data[[req.body.rule["field"].split('.')[0]]];
                      const s = req.body.rule["field"].split('.')[1];
                      var checkCondition = r[s] >= req.body.rule.condition_value;
                      if(checkCondition == true)
                      {
                        let validation = new validationClass(!checkCondition, req.body.rule["field"], r[s], req.body.rule["condition"], req.body.rule["condition_value"]);
                        let data = new dataClass(validation); 
                        let returnResponse = new responseClass(`field ${req.body.rule["field"]} successfully validated.`,"success", data);
                        res.status(200).send( returnResponse );
                      }
                      else if(checkCondition == false)
                      {
                        let validation = new validationClass(!checkCondition, req.body.rule["field"], r[s], req.body.rule["condition"], req.body.rule["condition_value"]);
                        let data = new dataClass(validation); 
                        let returnResponse = new responseClass(`field ${req.body.rule["field"]} failed validation.`,"error", data);
                        res.status(400).send( returnResponse );
                      }
                    }
                    else if(req.body.rule.condition == "gt")
                    {
                      const r =  req.body.data[[req.body.rule["field"].split('.')[0]]];
                      const s = req.body.rule["field"].split('.')[1];
                      var checkCondition = r[s] > req.body.rule.condition_value;
                      if(checkCondition == true)
                      {
                        let validation = new validationClass(!checkCondition, req.body.rule["field"], r[s], req.body.rule["condition"], req.body.rule["condition_value"]);
                        let data = new dataClass(validation); 
                        let returnResponse = new responseClass(`field ${req.body.rule["field"]} successfully validated.`,"success", data);
                        res.status(200).send( returnResponse );
                      }
                      else if(checkCondition == false)
                      {
                        let validation = new validationClass(!checkCondition, req.body.rule["field"], r[s], req.body.rule["condition"], req.body.rule["condition_value"]);
                        let data = new dataClass(validation); 
                        let returnResponse = new responseClass(`field ${req.body.rule["field"]} failed validation.`,"error", data);
                        res.status(400).send( returnResponse );
                      }
                    }
                    else if(req.body.rule.condition == "neq")
                    {
                      const r =  req.body.data[[req.body.rule["field"].split('.')[0]]];
                      const s = req.body.rule["field"].split('.')[1];
                      var checkCondition = r[s] != req.body.rule.condition_value;
                      var checkCondition = r[s] > req.body.rule.condition_value;
                      if(checkCondition == true)
                      {
                        let validation = new validationClass(!checkCondition, req.body.rule["field"], r[s], req.body.rule["condition"], req.body.rule["condition_value"]);
                        let data = new dataClass(validation); 
                        let returnResponse = new responseClass(`field ${req.body.rule["field"]} successfully validated.`,"success", data);
                        res.status(200).send( returnResponse );
                      }
                      else if(checkCondition == false)
                      {
                        let validation = new validationClass(!checkCondition, req.body.rule["field"], r[s], req.body.rule["condition"], req.body.rule["condition_value"]);
                        let data = new dataClass(validation); 
                        let returnResponse = new responseClass(`field ${req.body.rule["field"]} failed validation.`,"error", data);
                        res.status(400).send( returnResponse );
                      }
                    }
                    else if(req.body.rule.condition == "contains")
                    {
                      const r =  req.body.data[[req.body.rule["field"].split('.')[0]]];
                      const s = req.body.rule["field"].split('.')[1];
                      var t = String(r[s]);
                      var u = String(req.body.rule.condition_value)
                      var checkCondition = (t + '').includes(u);
                      if(checkCondition == true)
                      {
                        let validation = new validationClass(!checkCondition, req.body.rule["field"], r[s], req.body.rule["condition"], req.body.rule["condition_value"]);
                        let data = new dataClass(validation); 
                        let returnResponse = new responseClass(`field ${req.body.rule["field"]} successfully validated.`,"success", data);
                        res.status(200).send( returnResponse );
                      }
                      else if(checkCondition == false)
                      {
                        let validation = new validationClass(!checkCondition, req.body.rule["field"], r[s], req.body.rule["condition"], req.body.rule["condition_value"]);
                        let data = new dataClass(validation); 
                        let returnResponse = new responseClass(`field ${req.body.rule["field"]} failed validation.`,"error", data);
                        res.status(400).send( returnResponse );
                      }
                    }
                  }
                  else
                  {
                    let returnResponse = new responseClass(`field ${req.body.rule["field"].split('.')[1]} is missing from ${req.body.rule["field"].split('.')[0]}.`,"error", null)
                    res.status(400).send(returnResponse);
                  }
                }
                else
                {
                  if(req.body.rule.condition == "eq")
                  {
                    const r =  req.body.data[[req.body.rule["field"].split('.')[0]]];
                    var checkCondition = r == req.body.rule.condition_value;
                    if(checkCondition == true)
                      {
                        let validation = new validationClass(!checkCondition, req.body.rule["field"], r, req.body.rule["condition"], req.body.rule["condition_value"]);
                        let data = new dataClass(validation); 
                        let returnResponse = new responseClass(`field ${req.body.rule["field"]} successfully validated.`,"success", data);
                        res.status(200).send( returnResponse );
                      }
                      else if(checkCondition == false)
                      {
                        let validation = new validationClass(!checkCondition, req.body.rule["field"], r, req.body.rule["condition"], req.body.rule["condition_value"]);
                        let data = new dataClass(validation); 
                        let returnResponse = new responseClass(`field ${req.body.rule["field"]} failed validation.`,"error", data);
                        res.status(400).send( returnResponse );
                      }
                  }
                  else if(req.body.rule.condition == "gte")
                  {
                    const r =  req.body.data[[req.body.rule["field"].split('.')[0]]];
                    var checkCondition = r >= req.body.rule.condition_value;
                    if(checkCondition == true)
                      {
                        let validation = new validationClass(!checkCondition, req.body.rule["field"], r, req.body.rule["condition"], req.body.rule["condition_value"]);
                        let data = new dataClass(validation); 
                        let returnResponse = new responseClass(`field ${req.body.rule["field"]} successfully validated.`,"success", data);
                        res.status(200).send( returnResponse );
                      }
                      else if(checkCondition == false)
                      {
                        let validation = new validationClass(!checkCondition, req.body.rule["field"], r, req.body.rule["condition"], req.body.rule["condition_value"]);
                        let data = new dataClass(validation); 
                        let returnResponse = new responseClass(`field ${req.body.rule["field"]} failed validation.`,"error", data);
                        res.status(400).send( returnResponse );
                      }
                  }
                  else if(req.body.rule.condition == "gt")
                  {
                    const r =  req.body.data[[req.body.rule["field"].split('.')[0]]];
                    var checkCondition = r > req.body.rule.condition_value;
                    if(checkCondition == true)
                      {
                        let validation = new validationClass(!checkCondition, req.body.rule["field"], r, req.body.rule["condition"], req.body.rule["condition_value"]);
                        let data = new dataClass(validation); 
                        let returnResponse = new responseClass(`field ${req.body.rule["field"]} successfully validated.`,"success", data);
                        res.status(200).send( returnResponse );
                      }
                      else if(checkCondition == false)
                      {
                        let validation = new validationClass(!checkCondition, req.body.rule["field"], r, req.body.rule["condition"], req.body.rule["condition_value"]);
                        let data = new dataClass(validation); 
                        let returnResponse = new responseClass(`field ${req.body.rule["field"]} failed validation.`,"error", data);
                        res.status(400).send( returnResponse );
                      }
                  }
                  else if(req.body.rule.condition == "neq")
                  {
                    const r =  req.body.data[[req.body.rule["field"].split('.')[0]]];
                    var checkCondition = r != req.body.rule.condition_value;
                    if(checkCondition == true)
                      {
                        let validation = new validationClass(!checkCondition, req.body.rule["field"], r, req.body.rule["condition"], req.body.rule["condition_value"]);
                        let data = new dataClass(validation); 
                        let returnResponse = new responseClass(`field ${req.body.rule["field"]} successfully validated.`,"success", data);
                        res.status(200).send( returnResponse );
                      }
                      else if(checkCondition == false)
                      {
                        let validation = new validationClass(!checkCondition, req.body.rule["field"], r, req.body.rule["condition"], req.body.rule["condition_value"]);
                        let data = new dataClass(validation); 
                        let returnResponse = new responseClass(`field ${req.body.rule["field"]} failed validation.`,"error", data);
                        res.status(400).send( returnResponse );
                      }
                  }
                  else if(req.body.rule.condition == "contains")
                  {
                    const r =  req.body.data[[req.body.rule["field"].split('.')[0]]];
                    var u = String(req.body.rule.condition_value)
                    var checkCondition = (r + '').includes(u);
                    if(checkCondition == true)
                      {
                        let validation = new validationClass(!checkCondition, req.body.rule["field"], r, req.body.rule["condition"], req.body.rule["condition_value"]);
                        let data = new dataClass(validation); 
                        let returnResponse = new responseClass(`field ${req.body.rule["field"]} successfully validated.`,"success", data);
                        res.status(200).send( returnResponse );
                      }
                      else if(checkCondition == false)
                      {
                        let validation = new validationClass(!checkCondition, req.body.rule["field"], r, req.body.rule["condition"], req.body.rule["condition_value"]);
                        let data = new dataClass(validation); 
                        let returnResponse = new responseClass(`field ${req.body.rule["field"]} failed validation.`,"error", data);
                        res.status(400).send( returnResponse );
                      }
                  }
                }
              }
              else
              {
                let returnResponse = new responseClass(`field ${req.body.rule["field"].split('.')[0]} is missing from data.`,"error", null)
                res.status(400).send(returnResponse);
              }
            }
            else if(!req.body.rule["field"])
            {
              let returnResponse = new responseClass("field is required.","error", null)
              res.status(400).send(returnResponse);
            }
            else if(!req.body.rule["condition"])
            {
              let returnResponse = new responseClass("condition is required.","error", null)
              res.status(400).send(returnResponse);
            }
            else if(!req.body.rule["condition_value"])
            {
              let returnResponse = new responseClass("condition_value is required.","error", null)
              res.status(400).send(returnResponse);
            }
        }
        else
        {
          let returnResponse = new responseClass("rule should be an object.","error", null)
          res.status(400).send(returnResponse);
        }
      }
      else
      {
        let returnResponse = new responseClass("data is required.", "error", null)
        res.status(400).send(returnResponse);
      }
    }
    else
    {
      let returnResponse = new responseClass("rule is required.", "error", null)
      res.status(400).send(returnResponse);
    }
  }
  else
  {
    let returnResponse = new responseClass("Invalid JSON payload passed.", "error", null)
      res.status(400).send(returnResponse);
  }

})

export default router;