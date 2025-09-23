function main() {
    var n, r, s, counting;

    n = Number(window.prompt('Enter a value for n'));
    counting = 0;
    for (r = 0; r <= n; r++) {
        for (s = 0; s <= n; s++) {
            window.alert((s * r).ToString() + " ");
            counting = counting + 1;
        }
        window.alert("");
    }
    window.alert("Cycle: " + counting);
}
