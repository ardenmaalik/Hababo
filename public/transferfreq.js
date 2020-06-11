class TransferFrequency extends Component {
	constructor(renderHookId) {
		super(renderHookId);
	}

	totalOutput(newPay) {
		let newPayment = newPay;
		this.total.innerHTML = `
        <h2>$${newPayment
					.toFixed(2)
					.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")} </h2>
        `;
		console.log(this.total);
	}

	transferFreqCalc() {
		console.log("run");
		let newPayment = document.getElementById("new-payment");
		let oldPayment = document.getElementById("old-payment").value;
		let oldFreq = document.getElementById("old-frequency").value;
		let newFreq = document.getElementById("new-frequency").value;

		let oldFrequency = this.Frequency(oldFreq);
		let newFrequency = this.Frequency(newFreq);

		console.log(oldFrequency);
		console.log(newFrequency);

		newPayment = (oldPayment * oldFrequency) / newFrequency;

		const newPay = newPayment;
		console.log(newPay);
		this.totalOutput(newPay);
	}

	Frequency(Freq) {
		let Frequency = Freq;

		if (Frequency == "Weekly") {
			return 52;
		} else if (Frequency == "Bi-Weekly") {
			return 26;
		} else if (Frequency == "Monthly") {
			return 12;
		} else if (Frequency == "Semi-Monthly") {
			return 24;
		} else if (Frequency == "Annually") {
			return 1;
		} else {
			console.log("Error");
		}
	}

	render() {
		const calculatorEl = this.createRootElement(
			"form",
			"transfer-payment-freq"
		);
		calculatorEl.innerHTML = `
        <h3>Transfer Payment Frequency</h3>
        <div class = 'container'>
            <div class = 'flex margin-10'>
                <label for = 'old frequency'>Old Frequency: </label>
                <select name = 'old frequency' id='old-frequency'>
                    <option value="Weekly">Weekly</option>
                    <option value="Bi-Weekly">Bi-Weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Semi-Monthly">Semi-Monthly</option>
                    <option value="Annual">Annual</option>
                </select>
            </div>

            <div class = 'flex margin-10'>
                <label for 'old payment'>Old Payments: </label>
                <input type = 'text' id='old-payment' />
            </div>

            <div class = 'flex margin-10'>
                <label for = 'new frequency'>New Frequency: </label>
                <select name="new frequency" class="right" id="new-frequency">
                    <option class="weekly" value="Weekly">Weekly</option>
                    <option class="bi-weekly" value="Bi-Weekly">Bi-Weekly</option>
                    <option class="monthly" value="Monthly">Monthly</option>
                    <option class="semi-monthly" value="Semi-Monthly">Semi-Monthly</option>
                    <option class="annual" value="Annual">Annual</option>
                </select>
            </div>
            <div class="output new-pay flex margin-10">
						<label for="new payments">New Payments: </label>
                    <div id="total-amount">
                        <div class ='tf-output'>
                            <h2>${0}</h2>
                        </div>
                    </div>
                </div>
                <button class="tf-btn btn margin-10">Calculate</button>
			</div>
                    `;

		this.total = document.querySelector(".tf-output h2");

		let tfBtn = document.querySelector(".tf-btn");

		tfBtn.addEventListener("click", (e) => {
			e.preventDefault();
			this.transferFreqCalc();
		});

		// return outputEl;
	}
}

class TransferCalc extends Component {
	constructor() {
		super();
	}

	render() {
		this.calc = new TransferFrequency("tfp");
	}
}

class App {
	static calc;

	static init() {
		const transferCalc = new TransferCalc();
		this.calc = transferCalc.calc;
	}
}

App.init();
