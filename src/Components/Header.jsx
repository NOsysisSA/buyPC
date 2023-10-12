import React from "react";
import './header.css'
function Header() {
  return (
    <div className="content">
      <h1>I want to collect PC</h1>
      <p>I need these components</p>
      <table>

        <tr>
            <td>Frame</td>
            <td>AroCool Cylon black</td>
            <td>42 €</td>
            <td><img src="https://www.alternate.de/p/600x600/t/Aerocool_Cylon__Tower_Geh_use@@tqxrz036.jpg" width={50} height={50}/></td>
            <td><a href="https://www.alternate.de/Aerocool/Cylon-Tower-Geh%C3%A4use/html/product/1378306">Click</a></td>
        </tr>
        <tr>
            <td>Processor</td>
            <td>AMD Ryzen 3 4100</td>
            <td>75 €</td>
            <td><img src="https://www.alternate.de/p/600x600/1/3/AMD_Ryzen__5_4500__Prozessor@@1831231_30.jpg" width={50} height={50}/></td>
            <td><a href="https://www.alternate.de/AMD/Ryzen-5-4500-Prozessor/html/product/1831231?sug=amd%20ryzen%205%204500">Click</a></td>
        </tr>
        <tr>
            <td>Motherboard</td>
            <td>GIGABYTE A520H M</td>
            <td>74 €</td>
            <td><img src="https://www.alternate.de/p/600x600/9/2/GIGABYTE_H510M_H_V2__Mainboard@@1916329_1.jpg" width={50} height={50}/></td>
            <td><a href="https://www.alternate.de/GIGABYTE/H510M-H-V2-Mainboard/html/product/1916329">Click</a></td>
        </tr>
        <tr>
            <td>RAM</td>
            <td>Corsair Vengence RGP 2x 8GB</td>
            <td>60 €</td>
            <td><img src="https://www.alternate.de/p/600x600/7/1/Corsair_DIMM_16_GB_DDR4_3200__2x_8_GB__Dual_Kit__Arbeitsspeicher@@1457417_1.jpg" width={50} height={50}/></td>
            <td><a href="https://www.alternate.de/Corsair/DIMM-16-GB-DDR4-3200-(2x-8-GB)-Dual-Kit-Arbeitsspeicher/html/product/1457417">Click</a></td>
        </tr>
        <tr>
            <td>Video card</td>
            <td>MSI Radeon RX 6400 AERO ITX</td>
            <td>145 €</td>
            <td><img src="https://www.alternate.de/p/600x600/3/7/MSI_Radeon_RX_6400_AERO_ITX__Grafikkarte@@1840273_32.jpg" width={50} height={50}/></td>
            <td><a href="https://www.alternate.de/MSI/Radeon-RX-6400-AERO-ITX-Grafikkarte/html/product/1840273">Click</a></td>
        </tr>
        <tr>
            <td>CPU cooling</td>
            <td>ENDORFY Fera 5 ARGB</td>
            <td>25 €</td>
            <td><img src="https://www.alternate.de/p/600x600/0/3/ENDORFY_Fera_5_ARGB__CPU_K_hler@@1878230.jpg" width={50} height={50}/></td>
            <td><a href="https://www.alternate.de/html/product/1878230?partner=goadwoPLA&partner=goadwomPer&campaign=300310992&adgroup=23549733792//&campaignCode=STREICHP_OFFPAGE&gclid=Cj0KCQjwsp6pBhCfARIsAD3GZuYEH4MireOY_ttZrK1-GANujraar8aI5RsC23rASnACIMiYwgR96MYaAmW1EALw_wcB">Click</a></td>
        </tr>
        <tr>
            <td>Momory 1</td>
            <td>SSD ADATA LEGEND 710 512 GB</td>
            <td>23 €</td>
            <td><img src="https://www.alternate.de/p/600x600/8/5/ADATA_LEGEND_710_512_GB__SSD@@1834058.jpg" width={50} height={50}/></td>
            <td><a href="https://www.alternate.de/ADATA/LEGEND-710-512-GB-SSD/html/product/1834058">Click</a></td>
        </tr>
        
        <tr>
            <td>Memory 2</td>
            <td>WD WD10EZEX 1 TB</td>
            <td>46 €</td>
            <td><img src="https://www.alternate.de/p/600x600/0/4/WD_WD10EZEX_1_TB__Festplatte@@1013040.jpg" width={50} height={50}/></td>
            <td><a href="https://www.alternate.de/WD/WD10EZEX-1-TB-Festplatte/html/product/1013040">Click</a></td>
        </tr>
        <tr>
            <td>Power unti</td>
            <td>System Power 9 CM 600W</td>
            <td>72 €</td>
            <td><img src="https://www.alternate.de/p/600x600/0/1/be_quiet__System_Power_9_CM_600W__PC_Netzteil@@1562610.jpg" width={50} height={50}/></td>
            <td><a href="https://www.alternate.de/be-quiet/System-Power-9-CM-600W-PC-Netzteil/html/product/1562610">Click</a></td>
        </tr>
        <tr>
            <td>Monitor</td>
            <td>MSI PRO MP243PDE</td>
            <td>120 €</td>
            <td><img src="https://www.alternate.de/p/600x600/3/9/MSI_PRO_MP243PDE__LED_Monitor@@1899693.jpg" width={50} height={50}/></td>
            <td><a href="https://www.alternate.de/MSI/PRO-MP243PDE-LED-Monitor/html/product/1899693?sug=MSI%20PRO%20MP241XDE">Click</a></td>
        </tr>
        <h4>full price: 682 €</h4>
      </table>
    </div>
  );
}

export default Header;
