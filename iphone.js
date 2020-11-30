class Mobile {
    constructor(battery, draf, inbox, sent) {

        this._battery = battery;
        this._draf = draf;
        this._inbox = inbox;
        this._sent = sent;
    }
    get battery() {
        return this._battery;
    }

    set battery(value) {
        this._battery = value;
    }

    get draf() {
        return this._draf;
    }

    set draf(value) {
        this._draf = value;
    }

    get inbox() {
        return this._inbox;
    }

    set inbox(value) {
        this._inbox = value;
    }

    get sent() {
        return this._sent;
    }

    set sent(value) {
        this._sent = value;
    }



    receive(mobile) {
        // them vao danh sach hop thu den thu nhap cua tham so mobile
        this._inbox.push(mobile._draf);
        // them vao danh sach hop thu gui thu nhap cua tham so mobile
        mobile._sent.push(mobile._draf);
        // lam trang thu nhap
        mobile.draf = "";
    }

    send(mobile) {
        // them vao danh sach hop thu den cua tham so mobile thu nhap cua mobile hien tai
        mobile._inbox.push(this._draf);
        // them vao danh sach thu da gui cua mobile hien tai thu nhap
        this._sent.push(this._draf);
        // lam trang thu nhap
        this._draf = "";
        // tut pin khi gui tin
        this._battery--;
    }
}