import React from "react";

const SaleStatistics = () => {
  return (
    <div className="col-xl-15 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Sale statistics</h5>
          <iframe 
             style={{
              background: "#FFFFFF",
              border: "none",
              borderRadius: "2px",
              boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
              width: "100%",
              height: "350px",
  
            }}
            src="https://charts.mongodb.com/charts-jrqdatabase-zxlck/embed/charts?id=641ab54c-dee9-4714-854a-f3ae60401a7a&maxDataAge=3600&theme=light&autoRefresh=true">

            </iframe>

          
        </article>
      </div>
    </div>
  );
};

export default SaleStatistics;



