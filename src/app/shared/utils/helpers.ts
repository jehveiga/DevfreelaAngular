import { FormGroup } from "@angular/forms";

// Form validator
export namespace Helpers {
  export function isInvalid(form: FormGroup, inputName: string, validatorName: string): void {
    const formControl: any = form.get(inputName);
    if (formControl.error != null) {
      return (
        formControl.errors[validatorName] &&
        form.get(inputName)?.touched
      );
    }

    return;

  }
}
