document.addEventListener('DOMContentLoaded', function() {
    var formContainer = document.getElementById('form-container');

    var formHtml = `
        <form id="routineForm">
            <div class="form-group">
                <label for="name">Nome:</label>
                <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
                <label for="age">Idade:</label>
                <input type="number" id="age" name="age" required>
            </div>
            <div class="form-group">
                <label for="height">Altura (em metros):</label>
                <input type="number" step="0.01" id="height" name="height" required>
            </div>
            <div class="form-group">
                <label for="weight">Peso (em kg):</label>
                <input type="number" step="0.1" id="weight" name="weight" required>
            </div>
            <div class="form-group">
                <label for="diet">Você se alimenta bem?</label>
                <select id="diet" name="diet" required>
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                    <option value="Às vezes">Às vezes</option>
                </select>
            </div>
            <div class="form-group">
                <label for="exercise">Você pratica exercícios regularmente?</label>
                <select id="exercise" name="exercise" required>
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                    <option value="Às vezes">Às vezes</option>
                </select>
            </div>
            <input type="submit" value="Calcular IMC">
        </form>
    `;

    formContainer.innerHTML = formHtml;

    document.getElementById('routineForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var name = document.getElementById('name').value;
        var age = document.getElementById('age').value;
        var height = parseFloat(document.getElementById('height').value);
        var weight = parseFloat(document.getElementById('weight').value);
        var diet = document.getElementById('diet').value;
        var exercise = document.getElementById('exercise').value;

        var imc = weight / (height * height);
        imc = imc.toFixed(2);

        var result = `Nome: ${name}<br>Idade: ${age}<br>Altura: ${height} m<br>Peso: ${weight} kg<br>Você se alimenta bem? ${diet}<br>Você pratica exercícios regularmente? ${exercise}<br><br><strong>Seu IMC é: ${imc}</strong>`;
        document.getElementById('result').innerHTML = result;
    });
});
