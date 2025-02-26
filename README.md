<h1 align="center"> ⚙️ Auto Stock Trader 💵 </h1>

<p align="center">An <i>awesome</i> repository containing scripts and projects for automating stock orders across multiple brokerages.</p>

<p align="right"><img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"/><img src="https://img.shields.io/badge/-selenium-%43B02A?style=for-the-badge&logo=selenium&logoColor=white"/><img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/><a href="https://github.com/sponsors/Prem-ium" target="_blank">
        <img src="https://img.shields.io/badge/sponsor-30363D?style=for-the-badge&logo=GitHub-Sponsors&logoColor=#EA4AA" alt="Github Sponsor"/></a></p>

# Features
- Multiple Stock Tickers Support (ex: `NVDA,TSLA,AREB` buys/sells in one test run)
- Extended & Market Hours Support
- Market & Limit Order Support
- `.bat` Script to Update `.side` files with new Tickers, Account Variables, etc.
- XPATH Checking & Error Handling 
- Account Slicing (Automate from a specific account & onward)
- Account Login Automation 
- JavaScript Account Array Helper Scripts

*Note: Gold Github Sponsor/Buy-Me-Coffee donation contributors may get access to exclusive features or beta features before the public.*

## Supported Brokerages
This project contains the means of automating buy/sell stock orders within:

- Ally Invest
- Chase JP Morgan Investments
- Charles Schwab
- Firstrade
- Fidelity
- Merrill Edge Lynch
- Sofi Invest
- Vanguard

# Enviornmental Variables
To use this project, you will need to set the following environment variables in your .env file:
| Variable          | Description                                       | Type                 |
|-------------------|---------------------------------------------------|----------------------|
| `SCHWAB_AI`         | Total Number of Schwab Accounts                  | Integer              |
| `MERRILL_AI`      | Total Number of Merrill Accounts                 | Integer              |
| `VANGUARD_AI`       | Total Number of Vanguard Accounts  | Integer       |
| `FIDELITY_AI`       | Fidelity account numbers                          | Nested List of Strings|
| `CHASE_AI`          | [AI Values found in Trade URL of Every Account](https://user-images.githubusercontent.com/80719066/216079858-746af166-8387-41ad-9564-dd0c6285eb39.png)            | Nested List of Strings| 
| `FIRSTRADE_AI`      | Fidelity Account Numbers | List of Strings       |
| `ALLY_AI`           | In [Ally Invest Settings Webpage](https://live.invest.ally.com/settings), change the default orders on the settings for all accounts to be a small penny stock for default stock ticker to minimize risk, Market, 1 Quantity!! | List of Strings       |
| --|--|--|
| `CUSTOM_DIR`        | Path to the folder to store updated .side files  | String               |
| `DYNAMIC`           | Dynamic Account Length Feature (0=Off, 1=On)    | Integer              |
| `SOFI_AI`           | List of account numbers for Sofi Helper Auto.side| List of Strings       |
| `SOFI_ACCOUNT_NAMES`| Account names and numbers for SoFi Auto.side    | String               |
| `SOFI_LOGIN`        | Login credentials for SoFi Auto.side file       | String               |
| `EXCLUDE_ACCOUNTS`  | List of SoFi account names to exclude           | String               |

Addionally, you may chose to store your login in your `.env` to automatically open and login to any brokerage. (<b>This is not recommended!!</b> I recommend using the login test to open the login URL to manually login, however storing credentials in a `.side` file is not recommended). Multiple account credentials are seperated by the `:` character. Note: The login test is best-try. Many brokerages such as Chase may block the login, but you are able to fill out user/password info quickly (if you choose to use this tool.)


| Variable          | Description                                       | Type                 | Example                          |
|-------------------|---------------------------------------------------|----------------------|----------------------------------|
| `CHASE_LOGIN`       | Chase Account Credentials                         | String               | CHASE_LOGIN="USERNAME:PASSWORD"   |
| `FIDELITY_LOGIN`    | Fidelity Account Credentials                      | String               | FIDELITY_LOGIN="USERNAME:PASSWORD"|
| `FIRSTADE_LOGIN`    | Firstrade Account Credentials                    | String               | FIRSTADE_LOGIN="USERNAME:PASSWORD"|
| `MERRILL_LOGIN`     | Merrill Account Credentials                       | String               | MERRILL_LOGIN="USERNAME:PASSWORD" |
| `SCHWAB_LOGIN`      | Schwab Account Credentials                        | String               | SCHWAB_LOGIN="USERNAME:PASSWORD"  |
| `ALLY_LOGIN`        | Ally Account Credentials                          | String               | ALLY_LOGIN="USERNAME:PASSWORD"    |
| `VANGUARD_LOGIN`    | Vanguard Account Credentials                      | String               | VANGUARD_LOGIN="USERNAME:PASSWORD"|

Refer to `.env.example` for more clarity.

# Installation

Follow these steps to set up and use Selenium IDE for automation:

1. **Download Selenium IDE:**
   - Download and install the Selenium IDE browser extension for your preferred browser from the addon extension store. We recommend using Chrome or Chromium browser for the best experience.
     - [Chrome Webstore Selenium IDE Page](https://chrome.google.com/webstore/detail/selenium-ide/mooikfkahbdckldjjndioackbalphokd)
     - [Edge Addon Selenium IDE Page](https://microsoftedge.microsoft.com/addons/detail/selenium-ide/ajdpfmkffanmkhejnopjppegokpogffp)

2. **Clone Repository & Install Dependencies:**
   ```bash
        git clone https://github.com/Prem-ium/Auto-StockTrader
        cd Auto-StockTrader
        pip install -r requirements.txt
    ```
    
3. **Configure Environment Variables (`.env`):**
    - Create `.env` & Configure your (`.env`) file using [Environmental Variables](https://github.com/Prem-ium/Auto-StockTrader#environmental-variables) formats.

4. **Run the Python Script:**
  ```
    python main.py
  ```

  - Pass a Stock Ticker as an argument to update all `.side` files

  ```
    python main.py APPL
  ```

  - Seperate multiple with `,`
  ```bsh
    python main.py NVDA,TSLA,APPL
  ```

5. **Open Updated Side Files:**
   - Open updated `.side` project files in Selenium IDE.

6. **Execute Desired Automation within Selenium IDE:**
   - Log in to your brokerage account.
   - Begin running your desired automation tasks in either the buy or sell test tabs.

For the most reliable automation runs, it is recommended to use Chrome or Chromium browser.

# Donations

I've been diligently working on this project for several months, and I'm thrilled with the progress it has made. Based on user testimonials, it has proven to be an invaluable tool for automating stock ticker orders across multiple brokerage accounts and various brokerages. I am continually striving to enhance its functionality and optimize its efficiency for automated order execution.

If you appreciate my work and would like to show your support, there are two convenient ways to make a donation:

1. **GitHub Sponsors**
   - [Donate via GitHub Sponsors](https://github.com/sponsors/Prem-ium)
   - This is the preferred donation method as it incurs no transaction fees & different tiers offer perks.
   - GitHub Silver & Gold Sponsors receive benefits with their donations ranging from exclusive private scripts with unique features, expedited bug support, & more. 
   [![GitHub Sponsor](https://img.shields.io/badge/sponsor-30363D?style=for-the-badge&logo=GitHub-Sponsors&logoColor=#EA4AAA)](https://github.com/sponsors/Prem-ium)

2. **Buy Me A Coffee**
   - [Donate via Buy Me A Coffee](https://www.buymeacoffee.com/prem.ium)
   - [![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/prem.ium)

Your generous donations will go a long way in helping me cover the expenses associated with developing new features and promoting the project to a wider audience. I extend my heartfelt gratitude to all those who have already contributed. Thank you for your support!

# License
This repository uses the [BSD 3-Clause “New” or “Revised” License.](https://choosealicense.com/licenses/bsd-3-clause/#)

# Acknowledgments / Final Remarks
I want to thank <a href="https://github.com/sponsors/Prem-ium">my sponsors</a>, <a href="https://www.buymeacoffee.com/prem.ium" target="_blank">donators</a>, &<a href="https://github.com/Prem-ium/Auto-StockTrader/graphs/contributors" target="_blank"> project contributor(s).</a> 
Thank you for supporting my work. 
I am beyond grateful, because of each one of you, I am able to build cool projects like this.

Thank you so much for your support in this repository.
Please consider leaving a :star2: if you found this project to be cool!

### ⚠️ DISCLAIMER ⚠️
I am not a financial advisor, nor am I affiliated with any brokerage mentioned in this repository. 

You may use this tool at your own risk. I am not responsible for any financial loss, account restriction, or any other damage that may occur with the use of this tool. This project is provided "as is" and without warranty of any kind. 

By using this repository, the user accepts all the risks and agrees to hold the developer(s) harmless from any and all claims, damages, or losses arising from the use of the project. 
