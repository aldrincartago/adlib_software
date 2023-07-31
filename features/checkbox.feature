Feature: Adlib Software

  Scenario: Navigates to a specific URL, select the checkbox against a specific name.
    Given I am on the "https://www.primefaces.org/primereact-v5/#/datatable/selection" page
    When I select the checkbox for "Blue Band"
    Then the "Blue Band" checkbox should be in selected state