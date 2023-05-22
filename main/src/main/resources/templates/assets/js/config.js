var boolean = true;
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible && boolean) {
      boolean = false
      reveals[i].classList.add("active");
      new Typed('.reveal.active > span#typeJava', {
        strings: ['<mark class = "text-expression">package </mark><mark class = "text-paths"></mark>br.com.site.portifolio;</br></br><mark class = "text-expression">public class</mark> Portifolio {</br></br>&emsp;&emsp;<mark class = "text-expression">public static void</mark> main(String[] <mark class = "text-calls">args</mark>) {</br>&emsp;&emsp;&emsp;&emsp;<mark class = "text-expression">if</mark> (args.<mark class = "text-enums">length </mark>== 0) {</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;System.<mark class = "text-enums">err</mark>.<mark class = "text-enums">println</mark>(<mark class = "text-variable">"Erro: número insuficiente de argumentos."</mark>);</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;System.<mark class = "text-enums">exit</mark>(1);</br>&emsp;&emsp;&emsp;&emsp;}</br></br>&emsp;&emsp;&emsp;&emsp;String <mark class = "text-calls">result</mark> = <mark class = "text-expression">new</mark> Curriculo().<mark class = "text-enums">build</mark>();</br>&emsp;&emsp;&emsp;&emsp;System.<mark class = "text-enums">out</mark>.<mark class = "text-enums">println</mark>(<mark class = "text-calls">result</mark>);</br>&emsp;&emsp;}</br>}'],
        typeSpeed: 1,
      });
    }
  }
}window.addEventListener("scroll", reveal);

