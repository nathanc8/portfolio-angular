import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Title } from '@angular/platform-browser';

interface ContactForm {
    name: string;
    email: string;
    phone: string;
    message: string;
}

@Component({
    selector: 'app-contact',
    imports: [FormsModule, ReactiveFormsModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
    form: FormGroup;
    submitStatus: 'success' | 'error' | null = null;
    statusMessage: string = '';

    constructor(private formBuilder: FormBuilder) {
        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', Validators.required, Validators.email],
            phone: ['', Validators.pattern('^[- +()0-9]+$')],
            message: ['', Validators.required],
        });
    }

    ngOnInit() {}

    public sendEmail() {
        if (this.form.valid) {
            const serviceID = 'service_g49j9h6';
            const templateID = 'template_r676l4g';
            const userID = 'KBXbTTF11_u7Vgg5b';

            emailjs
                .send(
                    serviceID,
                    templateID,
                    {
                        name: this.form.get('name')?.value,
                        email: this.form.get('email')?.value,
                        message: this.form.get('message')?.value,
                    },
                    userID,
                )
                .then(
                    (result: EmailJSResponseStatus) => {
                        this.submitStatus = 'success';
                        this.statusMessage = 'Votre message a été envoyé avec succès !';
                        this.form.reset();
                    },
                    (error) => {
                        this.submitStatus = 'error';
                        this.statusMessage =
                            "Une erreur s'est produite. Veuillez réessayer ou choisir un autre moyen de contact.";
                    },
                );
        }
    }

    // constructor(private title: Title) {
    //     this.title.setTitle('NCZ | Contact');
    // }

    // form: ContactForm = {
    //     name: '',
    //     email: '',
    //     phone: '',
    //     message: '',
    // };

    // http = inject(HttpClient);

    // //@Todo Sortir les identifiants dans un autre fichier

    // send() {
    //     this.http
    //         .post(
    //             'https://api.emailjs.com/api/v1.0/email/send',
    //             {
    //                 lib_version: '4.4.1',
    //                 service_id: 'service_fok4lio',
    //                 template_id: 'template_sfpc126',
    //                 template_params: this.form,
    //                 user_id: 'nQzpLwYJzNxHi9Omw',
    //             },
    //             {
    //                 responseType: 'text',
    //             },
    //         )
    //         .subscribe(() => {
    //             //@Todo Ajouter une alerte à ce niveau là, ou une notification plutôt qu'un console.log
    //             console.log('Sent !');
    //         });
    // }
}
