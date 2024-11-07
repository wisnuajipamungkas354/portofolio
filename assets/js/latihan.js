(function(){
    console.log('Hello World!');
})();

class Car {
    constructor(merk, tipe){
        this.merk = merk;
        this.tipe = tipe;
    }

    drive(){
        console.log(`${this.merk} ${this.tipe} sedang dijalankan!`);
    }
}

const mobil1 = new Car('Toyota', 'Kijang');
const mobil2 = new Car('Lamborghini', 'Aventador');

mobil1.drive();
mobil2.drive();