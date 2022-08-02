function tampilkanWaktu() {
    var tampilkanJam = new Date();
    var waktu = new Date(tampilkanJam.getTime());
    var sh = waktu.getHours().toString();
    var sm = waktu.getMinutes().toString();
    document.getElementById("jam").innerHTML = (sh.length == 1 ? "0" + sh : sh) + ":" + (sm.length == 1 ? "0" + sm : sm);
}