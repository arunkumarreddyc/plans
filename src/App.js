import "./App.css";
import Plans from "./Plans";

function App() {
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {/* Free Tier */}
          <Plans plan="Free" amount="0" noofusers="Single User" storage='5GB' subdomain='Free Subdomain'/>
          {/* Plus Tier */}
          <Plans plan="Plus" amount="9" noofusers="5 Users" storage='50GB' subdomain='Free Subdomain' />
          {/* Pro Tier */}
          <Plans plan="Pro" amount="49" noofusers="Unlimited Users" storage='150GB' subdomain='Unlimited Free Subdomains' />
        </div>
      </div>
    </section>
  );
}

export default App;
