export const sendMensage = () => {
    const linkWhatsApp =
        "https://wa.me/" +
        55041999174483 +
        "?text=" +
        encodeURIComponent("Olá, vim através do site da Rico Marcas Baterias!");

    window.open(linkWhatsApp, "_blank");
}

export const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
};