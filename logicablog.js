          
        //Array de Categoria em JSON puro
        var categorias = [
            { "Id": "1", "Categoria": "FORMATACAO" },
            { "Id": "2", "Categoria": "CURIOSIDADE" },
            { "Id": "3", "Categoria": "NOVIDADES" }]
        //Array de Subcategoria em JSON puro
        var subCategorias = [
            { Id: 1, IdCategoria: 1, Nome: "MACKBOOK" },
            { Id: 2, IdCategoria: 1, Nome: "OUTROS"},
            { Id: 3, IdCategoria: 2, Nome: "TECNOLOGIA" },
            { Id: 4, IdCategoria: 2, Nome: "APPLE" },
            { Id: 5, IdCategoria: 3, Nome: "APPLE" },
            { Id: 6, IdCategoria: 3, Nome: "PROFISSOES DE TI" }]
        //closure pois a funcao categorias interna usa pra fazer o set da option
        $(document).ready(function () {
            //Percorre o array de categorias para popular o combo de categorias
            $.each(categorias, function (i, categoria) {
                //Faz o append (adiciona) cada um dos itens do array como options do select de id combo1
                $("#combo1").append($('<option>', {
                    //neste caso o value do option vai ser a pripriedade Id (é case sensitive, então cuide da nomenclatura)
                    value: categoria.Id,
                    //no text estou usando a propriedade Categoria dos objetos dentro do array categoria (case sensitive também)
                    text: categoria.Categoria
                }))
            })
            //Vai ser acionado cada vez que o combo1 tracar de item selecionado
            $("#combo1").change(function () {
                //Pegando o novo valor selecionado no combo
                var categoria = $(this).val()
                carregaCombo2(categoria);
            })
 
            //Definir o item selecionado no carregamento da página
            $("#combo1").val()
            //carregar o combo2 baseado na categoria selecionada
            carregaCombo2(1)
            //Selecionar a subcategoria passando o id dela
            $("#combo2").val()
        })
 
        function carregaCombo2(categoria) {
            //Fazer um filtro dentro do array de categorias com base no Id da Categoria selecionada no combo1
            var subCategoriasFiltradas = $.grep(subCategorias, function (e) { return e.IdCategoria == categoria; });
            //Faz o append (adiciona) cada um dos itens do array filtrado no combo2
            $("#combo2").html('<option>CATEGORIA</option>');
            $.each(subCategoriasFiltradas, function (i, subcategoria) {
                $("#combo2").append($('<option>', {
                    value: subcategoria.Id, //Id do objeto subcategoria
                    text: subcategoria.Nome //Nome da Subcategoria
                }))
            })
        }
 
   
