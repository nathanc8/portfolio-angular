import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
interface ContactForm {
    name: string;
    email: string;
    phone: string;
    message: string;
}

@Component({
    selector: 'app-contact',
    imports: [FormsModule, ReactiveFormsModule, CommonModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
    form: FormGroup;
    submitStatus: 'success' | 'error' | null = null;
    statusMessage: string = '';

    constructor(
        private formBuilder: FormBuilder,
        private title: Title,
    ) {
        this.title.setTitle('NCZ | Contact');
        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            email: [
                '',
                [
                    Validators.required,
                    Validators.email,
                    Validators.pattern('^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$'),
                ],
            ],
            phone: ['', Validators.pattern('^(?:(?:\\+|00)33|0)\\s*[1-9](?:[\\s.-]*\\d{2}){4}$')],
            message: ['', Validators.required],
        });
    }

    ngOnInit() {}

    public sendEmail() {
        if (this.form.valid) {
            const serviceID = process.env['NG_APP_EMAIL_SERVICE_ID'];
            const templateID = process.env['NG_APP_EMAIL_TEMPLATE_ID'];
            const userID = process.env['NG_APP_EMAIL_USER_ID'];
            emailjs
                .send(
                    serviceID!,
                    templateID!,
                    {
                        name: this.form.get('name')?.value,
                        email: this.form.get('email')?.value,
                        phone: this.form.get('phone')?.value,
                        message: this.form.get('message')?.value,
                    },
                    userID,
                )
                .then(
                    (result: EmailJSResponseStatus) => {
                        this.submitStatus = 'success';
                        this.statusMessage = '\u{2705} Your message has been sent successfully!';
                        this.form.reset();
                    },
                    (error) => {
                        console.log(serviceID, templateID, userID), (this.submitStatus = 'error');
                        this.statusMessage =
                            '\u{274C} An error occurred. Please try again or choose another contact method.';
                    },
                );
        }
    }

    isFieldInvalid(field: string): boolean | undefined {
        const control = this.form.get(field);
        return control?.invalid && (control?.touched || control?.dirty);
    }

    isPhoneInvalid(field: string): boolean | undefined {
        const control = this.form.get(field);
        return control?.invalid && control?.dirty;
    }
}
