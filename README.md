## K6 Performance Test


### Install k6

 - Ubuntu/Debian: 
  `sudo gpg -k`
  `sudo gpg --no-default-keyring --keyring /usr/share/keyrings/k6-archive-keyring.gpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69`
  `echo "deb [signed-by=/usr/share/keyrings/k6-archive-keyring.gpg] https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list`
  `sudo apt-get update`
  `sudo apt-get install k6`

- Fedora/CentOs

  `sudo dnf install https://dl.k6.io/rpm/repo.rpm`
  `sudo dnf install k6`

- Mac:
  `brew install k6`

- Windows:
   `choco install k6`
  

### How to run the stress test

`k6 run stress.js --vus {NUMBER} --duration {NUMBER}s`

 - vus: virtual users simultaneous
