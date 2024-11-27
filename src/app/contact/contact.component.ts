import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ContactForm {
    name: string;
    email: string;
    phone: string;
    message: string;
}

@Component({
    selector: 'app-contact',
    imports: [FormsModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css'
})
export class ContactComponent {
    form: ContactForm = {
        name: '',
        email: '',
        phone: '',
        message: '',
    };

    http = inject(HttpClient);

    //@Todo Sortir les identifiants dans un autre fichier

    send() {
        this.http
            .post(
                'https://api.emailjs.com/api/v1.0/email/send',
                {
                    lib_version: '4.4.1',
                    service_id: 'service_fok4lio',
                    template_id: 'template_sfpc126',
                    template_params: this.form,
                    user_id: 'nQzpLwYJzNxHi9Omw',
                },
                {
                    responseType: 'text',
                },
            )
            .subscribe(() => {
                //@Todo Ajouter une alerte à ce niveau là, ou une notification plutôt qu'un console.log
                console.log('Sent !');
            });
    }
}
