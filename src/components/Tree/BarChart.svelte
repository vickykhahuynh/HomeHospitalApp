<script>
    export let barData;
  
    // Calculate total to determine percentage width for each bar
    const total = barData.reduce((acc, item) => acc + item.value, 0);
    console.log(total)
  
    // Function to calculate percentage and style for each bar
    const barStyle = (value) => {
      const percentage = (value / total) * 100;
      return percentage;
    };
  </script>
  
  <div class="bar-chart">
    {#each barData as { label, value }, index}
      <div style="display: table-row">
        <div style="display:table-cell; padding-right:10px;">{label}</div>
        <div style="display:table-cell; width:100px;">
            <div class="bar bar{index}" style={"width:"+barStyle(value)+"%;"}> &#160</div>
        </div>
        <div style="display:table-cell">{value.toFixed()}</div>

      </div>
    {/each}
  </div>
  
  <style>
    .bar-chart {
      display: table;
      flex-direction: column;
      margin-top: 20px;
    }
  
    .bar {
      height: 30px;
      margin-bottom: 5px;
      color: white;
      text-align: center;
      line-height: 30px;
      border-radius: 5px;
    }
  
    .bar0{
      background-color: #4CAF50; /* Green */
    }
  
    .bar1{
      background-color: #f44336; /* Red */
    }
  </style>
  