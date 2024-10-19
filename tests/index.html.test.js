const fs = require('fs');

const indexHtml = fs.readFileSync('./index.html', 'utf-8');

describe('index.html', () => {
  it('should have a valid document structure', () => {
    expect(indexHtml).toContain('<html>');
    expect(indexHtml).toContain('<head>');
    expect(indexHtml).toContain('<title>');
    expect(indexHtml).toContain('<body>');
  });

  it('should have the correct title', () => {
    expect(indexHtml).toContain('<title>Google Search Console Reports 📔 Uncovered</title>');
  });

  it('should contain links to all report sections', () => {
    const reportSections = [
      '3D Models Report',
      'AMP (Accelerated Mobile Pages) Report',
      'AMP Articles Report',
      'Articles Report',
      'Auto User Review Report',
      'Breadcrumbs Report',
      'Carousels Report',
      'COPPA: Tag for Child-Directed Treatment',
      'Core Web Vitals Report',
      'Course Info Report',
      'Courses Report',
      'Critic Reviews Report',
      'Datasets Report',
      'Discussion Forum Report',
      'Education Q&A (Question and Answer) Report',
      'Employer Ratings Report',
      'Entity Lookup Report',
      'Estimated Salaries Report',
      'Events Report',
      'Fact Check Report',
      'FAQ (Frequently Asked Questions) Report',
      'Feed Reports',
      'Financial Wellness Report',
      'Guided Recipes Report',
      'How-To Report',
      'HTTPS (Secure Websites) Report',
      'Images Metadata Report',
      'Indexing Report',
      'Job Trainings Report',
      'Job Postings Report',
      'Learning Video Report',
      'Lenslets Report',
      'Links Report',
      'Lists Report',
      'Live Coverage Articles Report',
      'Local Business Report',
      'Logos Report',
      'Manual Actions Report',
      'Math Solvers Report',
      'Medical Conditions Report',
      'Merchant Listings Report',
      'Mobile Usability Report',
      'Movies Report',
      'Opt Out from certain Google Properties',
      'Organization Info Report',
      'Page Experience Report',
      'Paywalled Content Report',
      'Person Report',
      'Performance in Discover Report',
      'Performance in Google News Report',
      'Performance in Search Analytics Report',
      'Practice Problems Report',
      'Products Report',
      'Profile Page Report',
      'Q&A (Question and Answer) Report',
      'Recipes Report',
      'Removals Report',
      'Review Snippets Report',
      'Security Issues Report',
      'Settings > Extended News Previews',
      'Settings > robots.txt',
      'Sitemaps Report',
      'Sitelinks Searchbox Report',
      'Shopping Tab Listings Report',
      'Software Apps Report',
      'Submit a COVID-19 Announcement for your site',
      'Special Announcements Report',
      'Sports Videos Report',
      'Subscribed Content Report',
      'Unparsable Structured Data Report',
      'Vacation Rentals Report',
      'Vehicle Listings Report',
      'Videos Report',
      'Video Index Report',
    ];

    reportSections.forEach(section => {
      expect(indexHtml).toContain(section);
    });
  });

  it('should contain the necessary JavaScript functions', () => {
    expect(indexHtml).toContain('function isValidInput(b)');
    expect(indexHtml).toContain('function submitForm()');
  });
});
