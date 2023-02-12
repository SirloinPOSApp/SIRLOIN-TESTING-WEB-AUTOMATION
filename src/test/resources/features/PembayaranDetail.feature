Feature: Pembayaran Detail

#  Scenario: Verify menu home
#    Given user on the sirloinPOS website
#    When user login with input "mukhlisanshori1997@gmail.com" as email and "Mukhlis11111" as password
#    And verify succes login title "Berhasil Login"
#    Then user should be "Product Toko" page

  Scenario: user will ordering product
    Given user on the sirloinPOS website
    When user login with input "mukhlisanshori1997@gmail.com" as email and "Mukhlis11111" as password
    And verify succes login title "Berhasil Login"
    Then user should be "Product Toko" page
    And user click product item
    And user click product item2
    And verify product item on keranjang
    And user click button increment twenty items
    And user click button decrement ten items
    Then user delete item in list keranjang
    When user click member field
    And user input member "18"
    Then user click member button
    And user verify value sub total, diskon member, total belanja
    And user click bayar button
    Then user redirect to "Pembayaran Detail" page

  Scenario: user will ordering product
    Given user on the sirloinPOS website
    When user login with input "mukhlisanshori1997@gmail.com" as email and "Mukhlis11111" as password
    And verify succes login title "Berhasil Login"
    Then user should be "Product Toko" page
    And user click product item
    And user click product item2
    And verify product item on keranjang
    And user click button increment twenty items
    And user click button decrement ten items
    Then user delete item in list keranjang
    When user click member field
    And user input member "18"
    Then user click member button
    And user verify value sub total, diskon member, total belanja
    And user click bayar button
    Then user redirect to "Pembayaran Detail" page
    And user verify nama product, qty, harga
    And user verify total belanja product, diskon member, total belanja


  Scenario: user will payment with tunai
    Given user on the sirloinPOS website
    When user login with input "mukhlisanshori1997@gmail.com" as email and "Mukhlis11111" as password
    And verify succes login title "Berhasil Login"
    Then user should be "Product Toko" page
    And user click product item
    And user click product item2
    And verify product item on keranjang
    And user click button increment twenty items
    And user click button decrement ten items
    Then user delete item in list keranjang
    When user click member field
    And user input member "18"
    Then user click member button
    And user verify value sub total, diskon member, total belanja
    And user click bayar button
    Then user redirect to "Pembayaran Detail" page
    And user verify nama product, qty, harga
    And user verify total belanja product, diskon member, total belanja
    And user sort pembayaran list by tunai
    Then user click button bayar
    Then see modal successfully
    When click OK button modal


  Scenario: user will payment with qris
    Given user on the sirloinPOS website
    When user login with input "mukhlisanshori1997@gmail.com" as email and "Mukhlis11111" as password
    And verify succes login title "Berhasil Login"
    Then user should be "Product Toko" page
    And user click product item
    And user click product item2
    And verify product item on keranjang
    And user click button increment twenty items
    And user click button decrement ten items
    Then user delete item in list keranjang
    When user click member field
    And user input member "18"
    Then user click member button
    And user verify value sub total, diskon member, total belanja
    And user click bayar button
    Then user redirect to "Pembayaran Detail" page
    And user verify nama product, qty, harga
    And user verify total belanja product, diskon member, total belanja
    And user sort pembayaran list by qris
    Then user click button bayar
    Then see modal scan barcode
    When click OK button modal scan barcode






