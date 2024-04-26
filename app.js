
    var mobiles = {
        SamsungA10: {
            name: "Samsung A10",
            ram: "4gb",
            rom: "64gb",
            camera: "13",
            price: "22,000 PKR"
        },
        SamsungA20: {
            name: "Samsung A20",
            ram: "4gb",
            rom: "64gb",
            camera: "18",
            price: "28,000"
        },
        SamsungA30: {
            name: "Samsung A30",
            ram: "4gb",
            rom: "64gb",
            camera: "25",
            price: "29,000"
        },
        IPhone11: {
            name: "IPhone11",
            ram: "4gb",
            rom: "64gb",
            camera: "12",
            price: "100,000"
        },
        IPhone12: {
            name: "IPhone12",
            ram: "4gb",
            rom: "64gb",
            camera: "12",
            price: "150,000"
        },
        IPhone13: {
            name: "IPhone13",
            ram: "6gb",
            rom: "128gb",
            camera: "24",
            price: "200,000"
        },
        OppoV20: {
            name: "OppoV20",
            ram: "8gb",
            rom: "128gb",
            camera: "64",
            price: "54,999"
        },
        OppoF19: {
            name: "OppoF19",
            ram: "6gb",
            rom: "128gb",
            camera: "48",
            price: "36,999"
        },
        OppoF11: {
            name: "OppoF11",
            ram: "4gb",
            rom: "64gb",
            camera: "48",
            price: "35,999"
        },
        VivoY20: {
            name: "VivoY20",
            ram: "4gb",
            rom: "64gb",
            camera: "13",
            price: "26,999"
        },
        VivoY21: {
            name: "VivoY21",
            ram: "4gb",
            rom: "64gb",
            camera: "13",
            price: "43,999"
        },
        VivoY55: {
            name: "VivoY55",
            ram: "8gb",
            rom: "128gb",
            camera: "50",
            price: "64,999"
        }
    };

    function updateModelsDropdown() {
        var selectedBrand = document.getElementById('brandSelect').value;
        var modelSelect = document.getElementById('modelSelect');
        modelSelect.innerHTML = '<option value="">Select Model</option>';
        for (var model in mobiles) {
            if (model.includes(selectedBrand)) {
                var option = document.createElement('option');
                option.value = model;
                option.text = mobiles[model].name;
                modelSelect.appendChild(option);
            }
        }
    }

    function searchByBrandAndModel() {
        var selectedModel = document.getElementById('modelSelect').value;
        var phone = mobiles[selectedModel];
        renderResults([phone]);
    }

    function renderResults(results) {
        var resultsContainer = document.getElementById('results');
        resultsContainer.innerHTML = '';
        if (results.length === 0) {
            resultsContainer.innerHTML = 'No results found';
        } else {
            var phone = results[0];
            var phoneInfo = `<div>
                                <h3>${phone.name}</h3>
                                <p>RAM: ${phone.ram}, ROM: ${phone.rom}</p>
                                <p>Camera: ${phone.camera}MP, Price: ${phone.price}</p>
                            </div>`;
            resultsContainer.innerHTML = phoneInfo;
        }
    }
