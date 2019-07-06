import { AbstractControl } from '@angular/forms';

export class DifferentValidator {
  static validate(fields: [string, ...string[]]) {
    return (form: AbstractControl) => {
      const values = [form.get(fields[0]).value];
      for (let index = 1; index < fields.length; index++) {
        const field = fields[index];
        const value = form.get(field).value;
        const fieldIndex = values.findIndex((v) => v === value);
        if (fieldIndex >= 0) {
          return {
            different: {
              field,
              value,
              equalTo: fields[fieldIndex],
            }
          };
        }
        values.push(value);
      }
      return null;
    };
  }
}
