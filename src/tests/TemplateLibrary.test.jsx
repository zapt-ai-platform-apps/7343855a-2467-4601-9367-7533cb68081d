import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Library from '../modules/templates/pages/Library';
import { templates } from '../modules/templates/data/templateData';

// Wrap component with router context
const LibraryWithRouter = () => (
  <BrowserRouter>
    <Library />
  </BrowserRouter>
);

describe('Template Library Component', () => {
  it('renders all templates initially', () => {
    render(<LibraryWithRouter />);
    
    // Check that all templates from the data file are displayed
    templates.forEach(template => {
      expect(screen.getByText(template.name)).toBeInTheDocument();
    });
  });
  
  it('filters templates by search term', () => {
    render(<LibraryWithRouter />);
    
    // Search for a specific template
    const searchInput = screen.getByPlaceholderText('Search templates...');
    fireEvent.change(searchInput, { target: { value: 'Welcome' } });
    
    // Should only show templates with "Welcome" in the name or description
    const welcomeTemplates = templates.filter(t => 
      t.name.includes('Welcome') || t.description.toLowerCase().includes('welcome')
    );
    
    // Other templates should not be visible
    const nonWelcomeTemplates = templates.filter(t => 
      !t.name.includes('Welcome') && !t.description.toLowerCase().includes('welcome')
    );
    
    welcomeTemplates.forEach(template => {
      expect(screen.getByText(template.name)).toBeInTheDocument();
    });
    
    nonWelcomeTemplates.forEach(template => {
      expect(screen.queryByText(template.name)).not.toBeInTheDocument();
    });
  });
  
  it('filters templates by type', () => {
    render(<LibraryWithRouter />);
    
    // Select only promotional templates
    const typeFilter = screen.getByRole('combobox');
    fireEvent.change(typeFilter, { target: { value: 'promotional' } });
    
    // Should only show promotional templates
    const promotionalTemplates = templates.filter(t => t.type === 'promotional');
    const nonPromotionalTemplates = templates.filter(t => t.type !== 'promotional');
    
    promotionalTemplates.forEach(template => {
      expect(screen.getByText(template.name)).toBeInTheDocument();
    });
    
    nonPromotionalTemplates.forEach(template => {
      expect(screen.queryByText(template.name)).not.toBeInTheDocument();
    });
  });
  
  it('shows "no templates found" message when no templates match criteria', () => {
    render(<LibraryWithRouter />);
    
    // Search for something that doesn't exist
    const searchInput = screen.getByPlaceholderText('Search templates...');
    fireEvent.change(searchInput, { target: { value: 'xyznonexistent' } });
    
    // Should show the "no templates found" message
    expect(screen.getByText('No templates found matching your criteria.')).toBeInTheDocument();
  });
});