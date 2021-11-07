//1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız.
//Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.
//(Araştırma konusu : şart blokları : if )
//Örnek kullanım : findPrime(2,5,8,21, 13) findPrime(3,5)

//2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.
//(Arkadaş sayılar için google)

//3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.

//4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

console.log("________________________ODEV-1________________________")
function asal_mi(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let tekrar = 0;
        for (let j = 1; j < numbers[i]; j++) {
            if (numbers[i] % j == 0) {
                tekrar++;
            }
        }
        if (tekrar == 1) {
            console.log(numbers[i] + ": Asal Sayı")
        }
        else {
            console.log(numbers[i] + ": Asal Sayı Değil")
        }        
    }
}
asal_mi(3)
asal_mi(2,4,5,8,11,14)
asal_mi(1,2,3,8,12,1397,3321,29830)

console.log("________________________ODEV-2________________________")
function arkadas_sayilar_mi(sayi1,sayi2) {
    let bolen1 = 0;
    let bolen2 = 0;
    for (let i = 1; i < sayi1; i++) {
        if (sayi1 % i == 0) {
            bolen1 = bolen1 + i;
            //console.log(i + ". bölen: " + bolen1); "Kontrol amaçlı"
        }
    }
    for (let j = 1; j < sayi2; j++) {
        if (sayi2 % j == 0) {
            bolen2 = bolen2 + j;
        }
    }
    //console.log("Bolen1 :" + bolen1) "Kontrol amaçlı"
    //console.log("Bolen2 :" + bolen2) "Kontrol amaçlı"
    
    if (bolen1 == sayi2 && bolen2 == sayi1) {
        console.log(sayi1 + " ve " + sayi2 + " Arkadaş Sayılardır")
        } 
    else {
        console.log(sayi1 + " ve " + sayi2 + " Arkadaş Sayılar değildir")
    }
}
arkadas_sayilar_mi(220,284)

console.log("________________________ODEV-3________________________")

function mukemmel_sayi_mi(m_sayi) {
    let m_bolen = 0;
    for (let i = 1; i < m_sayi; i++) {
        if (m_sayi % i == 0) {
            m_bolen = m_bolen + i;
        }
    }
    if (m_bolen == m_sayi) {
        console.log(m_sayi + " Mükemmel Sayıdır")
        } 
    else {
        console.log(m_sayi + " Mükemmel Sayı değildir")
    }
}

mukemmel_sayi_mi(3)
mukemmel_sayi_mi(5)
mukemmel_sayi_mi(6)
mukemmel_sayi_mi(12)
mukemmel_sayi_mi(28)

console.log("________________________ODEV-4________________________")

function asal_liste(number) {
    for (let i = 2; i < number; i++) {
        let tekrar2 = 0;
        for (let j = 1; j < i; j++) {
            if (i % j == 0) {
                tekrar2++;
            }
        }
        if (tekrar2 == 1) {
            console.log(i)
        }
    }
}

asal_liste(1000)