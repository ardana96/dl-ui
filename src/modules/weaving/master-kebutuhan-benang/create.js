import { inject, Lazy } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { Service } from './service';


@inject(Router, Service)
export class Create {
    onCreated=false;
    constructor(router, service) {
        this.router = router;
        this.service = service;
        this.data = {};
    }

    activate(params) {

    }

    //Dipanggil ketika tombol "Kembali" ditekan
    list() {
        this.router.navigateToRoute('list');
    }

    //Tombol "Simpan", menyimpan nilai masukan
    saveCallback(event) {
        this.service.create(this.data)
            .then(result => {
                this.list();
            })
            .catch(e => {
                this.error = e;
            })

        // console.log(this.data);
        // this.data.orderNo = "test";
    }

    deleteCallback(event){
        
    }

    //Tombol "Kembali", panggil list()
    cancelCallback(event) {
        this.list();
    }
}