export default function aulas_it(e) {
    e.capitulo == '1' ? $("#it1").attr("src", e.url) : 
    e.capitulo == '2' ? $("#it2").attr("src", e.url) : 
    e.capitulo == '3' ? $("#it3").attr("src", e.url) : 
    e.capitulo == '4' ? $("#it4").attr("src", e.url) : 
    e.capitulo == '5' ? $("#it5").attr("src", e.url) : 
    e.capitulo == '6' ? $("#it6").attr("src", e.url) : ''
}
