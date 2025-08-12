# Automated Testing Setup for Portfolio

This directory contains automated tests for the portfolio website using Playwright.

## Test Structure

### Navigation Tests (`navigation.spec.ts`)
- Tests all navigation menu items
- Verifies smooth scrolling to sections
- Tests social media links
- Tests CV download and "Get in touch" buttons

### Contact Form Tests (`contact-form.spec.ts`)
- Tests form field visibility and functionality
- Tests form submission and success messages
- Tests form validation
- Tests form clearing after submission

### Theme and Language Tests (`theme-language.spec.ts`)
- Tests language toggle (English ↔ Spanish)
- Tests theme toggle functionality
- Tests state persistence between toggles
- Tests navigation consistency in both languages

### Responsive Design Tests (`responsive.spec.ts`)
- Tests desktop, tablet, and mobile layouts
- Tests touch interactions on mobile
- Tests orientation changes
- Tests proper touch target sizes

### Content Verification Tests (`content.spec.ts`)
- Tests all content sections are displayed
- Tests project links and descriptions
- Tests skills section with all categories
- Tests social media links
- Tests page metadata

## Running Tests

### Install Dependencies
```bash
npm install @playwright/test
npx playwright install
```

### Run All Tests
```bash
npx playwright test
```

### Run Specific Test File
```bash
npx playwright test navigation.spec.ts
```

### Run Tests in Specific Browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run Tests on Mobile
```bash
npx playwright test --project="Mobile Chrome"
npx playwright test --project="Mobile Safari"
```

### Run Tests with UI Mode
```bash
npx playwright test --ui
```

### Generate Test Report
```bash
npx playwright show-report
```

## Test Configuration

The tests are configured in `playwright.config.ts` with:
- Base URL: https://luisrivas.work/
- Multiple browser support (Chrome, Firefox, Safari)
- Mobile device testing
- Screenshot and video capture on failure
- HTML report generation

## Test Coverage

The automated tests cover:

### ✅ Functional Testing
- [x] Navigation between all sections
- [x] Contact form submission
- [x] Language toggle (English/Spanish)
- [x] Theme toggle
- [x] Social media links
- [x] Project links and descriptions

### ✅ Responsive Testing
- [x] Desktop layout (1920x1080)
- [x] Tablet layout (768x1024)
- [x] Mobile layout (375x667)
- [x] Touch interactions
- [x] Orientation changes

### ✅ Cross-Browser Testing
- [x] Chrome (Chromium)
- [x] Firefox
- [x] Safari (WebKit)
- [x] Mobile Chrome
- [x] Mobile Safari

### ✅ Content Verification
- [x] All sections display correctly
- [x] Project information is accurate
- [x] Skills are properly categorized
- [x] Links are functional
- [x] Meta information is correct

## Continuous Integration

These tests can be integrated into CI/CD pipelines:

```yaml
# Example GitHub Actions workflow
- name: Run Playwright tests
  run: npx playwright test
- name: Upload test results
  uses: actions/upload-artifact@v2
  if: always()
  with:
    name: playwright-report
    path: playwright-report/
```

## Test Maintenance

### Adding New Tests
1. Create a new `.spec.ts` file in the `tests/` directory
2. Follow the existing test structure and naming conventions
3. Use descriptive test names and proper assertions
4. Include both positive and negative test cases

### Updating Tests
- Update selectors if the website structure changes
- Add tests for new features
- Remove tests for deprecated functionality
- Keep tests focused and maintainable

## Troubleshooting

### Common Issues
1. **Tests failing on mobile**: Check viewport sizes and touch targets
2. **Language toggle issues**: Verify text content matches expected language
3. **Form submission failures**: Check for network issues or form validation
4. **Navigation problems**: Verify section IDs and scroll behavior

### Debug Mode
Run tests with debug information:
```bash
npx playwright test --debug
```

### Visual Testing
Take screenshots for visual regression testing:
```bash
npx playwright test --update-snapshots
```

## Performance Considerations

- Tests run in parallel by default
- Screenshots and videos only captured on failure
- Tests are optimized for speed while maintaining reliability
- Mobile tests use realistic device configurations

## Security Notes

- Tests use public URLs only
- No sensitive data is included in tests
- Form submissions use test data only
- Tests don't interact with real backend services 