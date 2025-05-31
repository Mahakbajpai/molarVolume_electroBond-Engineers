# 🧪 Procedure: Gas Behavior Simulator

## 🎯 Objective
To compare the molar volume of a real gas calculated using the **Van der Waals Equation** with that of an **ideal gas**, under varying pressure conditions.

---

## 🔧 Step-by-Step Instructions

### 1. Launch the Simulator
Open the **Gas Behavior Simulator** in a web browser. Ensure a stable internet connection to load all necessary libraries (e.g., Chart.js, Tailwind CSS).

### 2. Select a Gas
Choose one of the four gases displayed on the simulator interface:
- **CO₂ (Carbon Dioxide)**
- **NH₃ (Ammonia)**
- **CH₄ (Methane)**
- **O₂ (Oxygen)**

✅ The simulator will automatically fill in the Van der Waals constants `a` and `b` for the selected gas.

### 3. Set the Temperature
Use the **temperature slider** to select the temperature in Kelvin (K).
- Default: 300 K
- Range: 100 K to 1000 K

### 4. Set the Pressure Range
Enter values for:
- **Minimum Pressure (atm)** – e.g., `1`
- **Maximum Pressure (atm)** – e.g., `100`
- **Pressure Step Size (atm)** – e.g., `5`

🔁 This defines the range and resolution of pressure values over which the simulation runs.

### 5. Run the Simulation
Click the **“Run Simulation”** button to calculate:
- Molar Volume using **Ideal Gas Law**
- Molar Volume using **Van der Waals Equation**
- **% Deviation** between the two values at each pressure

### 6. Observe the Output
- A **line chart** displays the molar volumes vs pressure for both models.
- A **data table** shows detailed numerical results:
  - Pressure (P)
  - Vₘ (Ideal)
  - Vₘ (Van der Waals)
  - % Deviation
- The **Observations section** highlights the physical implications of the results at low and high pressures.

### 7. Analyze Trends
- Compare how closely the two models agree at **low pressures**.
- Note how Van der Waals significantly **deviates at high pressures** due to molecular volume and intermolecular forces.

---

## 📘 Key Equations Used

### Ideal Gas Law
\[
V_m = \frac{RT}{P}
\]

### Van der Waals Equation for 1 Mole
\[
\left(P + \frac{a}{V_m^2}\right)(V_m - b) = RT
\]

---

## 🧾 Conclusion Tips
- At **low pressure**: Real and ideal gases behave similarly.
- At **high pressure**: Real gases deviate due to **finite molecular volume** and **intermolecular forces**.

---

> 💡 Use this procedure to guide your exploration of real gas behavior and to understand deviations from ideality in high-pressure environments.
