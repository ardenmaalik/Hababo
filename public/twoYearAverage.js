class TwoYearAverage extends Component {
	constructor(renderHookId) {
		super(renderHookId);
	}

	totalOutput(twoYearTotal, varianceTotal) {
		let twoYrAvg = twoYearTotal;
		let variance = varianceTotal;

		this.xtotal.innerHTML = `
        <h2>${twoYrAvg.toFixed(2)}</h2>
        `;

		this.ytotal.innerHTML = `
        <h2>${variance.toFixed(2)} </h2>
        `;
		console.log(this.xtotal, this.ytotal);
	}

	twoYrAvg(a, b) {
		let yearOne = a;
		let yearTwo = b;

		return (+yearOne + +yearTwo) / 2;
	}

	varianceOutputCalc(c, d) {
		let twoYearOutput = c;
		let yearOne = d;

		return ((+twoYearOutput - +yearOne) / +twoYearOutput) * 100;
	}

	twoYrCalc() {
		console.log("calc run");
		let yearOne = document.getElementById("yr-one").value;
		let yearTwo = document.getElementById("yr-two").value;
		let twoYearOutput = document.getElementById("two-yr-output");
		let varianceOutput = document.getElementById("variance-output");

		twoYearOutput = this.twoYrAvg(yearOne, yearTwo);
		console.log(twoYearOutput);
		varianceOutput = this.varianceOutputCalc(twoYearOutput, yearOne);
		console.log(varianceOutput);

		const twoYearTotal = twoYearOutput;
		const varianceTotal = varianceOutput;
		console.log("calc end");
		this.totalOutput(twoYearTotal, varianceTotal);
	}

	render() {
		const twoYrFormEl = this.createRootElement("form", "two-yr-average");
		twoYrFormEl.innerHTML = `
			<h3>2 Year Average</h3>
			<div class="container">
				<div class="yr-one flex margin-10">
					<label for="Year 1">Year 1: </label>
					<input type="text" class="yr-one-input" id="yr-one" />
				</div>

				<div class="yr-two flex margin-10">
					<label for="Year 2">Year 2: </label>
					<input type="text" class="yr-two-input" id="yr-two" />
				</div>

				<div class="output flex margin-10">
					<div class = 'two-yr-output'>
						<label for="Two Year Average">Two Year Average: </label>
						<h2>${0}</h2>
					</div>
					<div class = 'variance-output'>
						<label for="Variance Output">Variance Output: </label>
						<h2>${0}</h2>
					</div>
                </div>
                <button class="two-year-btn btn margin-10">Calculate</button>
			</div>
        `;
		this.xtotal = twoYrFormEl.querySelector(".two-yr-output h2");

		this.ytotal = twoYrFormEl.querySelector(".variance-output h2");

		let twoYrBtn = document.querySelector(".two-year-btn");

		twoYrBtn.addEventListener("click", (e) => {
			e.preventDefault();
			console.log("calc start");
			this.twoYrCalc();
		});

		// return outputEl;
	}
}

class TwoYearCalc extends Component {
	constructor() {
		super();
	}

	render() {
		this.calc = new TwoYearAverage("2ya");
	}
}

class Apps {
	static calc;

	static init() {
		const twoyrcalc = new TwoYearCalc();
		this.calc = twoyrcalc.calc;
	}
}

Apps.init();
