class parkirGrandIndonesia {  
    constructor(tipeKendaraan, tiket) {  
        this.type = tipeKendaraan;  
        this.ticket = tiket;  
        this.hargaDasar = 3000;  
    }  
    harga() {  
        return this.hargaDasar;  
    }  
    listData() {  
        return [  
            `Tipe Kendaraan     : ${this.type}`,  
            `Nomor Tiket        : ${this.ticket}`,  
            `Biaya Parkir       : Rp${this.harga()}`  
        ];  
    }  
    strukParkir() {  
        const lines = this.listData();  
        const border = "+-------------------------------+";  
        return [  
            border,  
            "|        STRUK PARKIR          |",  
            border,  
            ...lines.map(line => `| ${line.padEnd(29)}|`),  
            border  
        ].join("\n");  
    }  
}  
class parkirVIP extends parkirGrandIndonesia {  
    harga() {  
        return super.harga() + 50000;  
    }  
    listData() {  
        return [  
            `Tipe Kendaraan     : ${this.type} (VIP)`,  
            `Nomor Tiket        : ${this.ticket}`,  
            `Biaya Parkir VIP   : Rp${this.harga()}`  
        ];  
    }  
}  
class Tena82Bang {  
    #urutanParkir = [];  
    parkir(kendaraan) {  
        this.#urutanParkir.push(kendaraan);  
        return "Parkir berhasil";  
    }  
    strukParkir() {  
        console.log("\n========== DAFTAR PARKIR ==========\n");  
        this.#urutanParkir.forEach((tiket, index) => {  
            console.log(`>> Kendaraan ke-${index + 1}`);  
            console.log(tiket.strukParkir() + "\n");  
        });  
        console.log("=========== TERIMA KASIH ==========\n");  
    }  
}  
  
// Simulasi  
const Parkir = new Tena82Bang();  
  
console.log(Parkir.parkir(new parkirGrandIndonesia("Mobil LCGC", "101")));  
console.log(Parkir.parkir(new parkirVIP("Mobil Sport", "02")));  
  
Parkir.strukParkir();  
