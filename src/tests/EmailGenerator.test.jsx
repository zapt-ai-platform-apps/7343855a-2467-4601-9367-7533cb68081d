import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Generator from '../modules/emails/pages/Generator';
import { generateEmailCopy } from '../modules/emails/api/emailGeneration';

// Mock the email generation API
vi.mock('../modules/emails/api/emailGeneration', () => ({
  generateEmailCopy: vi.fn()
}));

describe('Email Generator Component', () => {
  it('renders the email generator form correctly', () => {
    render(<Generator />);
    
    expect(screen.getByText('Create Email')).toBeInTheDocument();
    expect(screen.getByText('Email Details')).toBeInTheDocument();
    expect(screen.getByText('Email Tone')).toBeInTheDocument();
    expect(screen.getByText('Generate Email')).toBeInTheDocument();
    expect(screen.getByText('Email Preview')).toBeInTheDocument();
  });
  
  it('allows selecting email tone', () => {
    render(<Generator />);
    
    // Find and click on a tone option
    const casualTone = screen.getByText('Casual');
    fireEvent.click(casualTone);
    
    // Verify it's selected (has the correct styling class)
    expect(casualTone.parentElement).toHaveClass('border-primary-500');
  });
  
  it('generates email when form is submitted', async () => {
    // Mock response from API
    generateEmailCopy.mockResolvedValue({
      subject: 'Test Subject',
      body: 'This is a test email body.'
    });
    
    render(<Generator />);
    
    // Fill in form fields
    fireEvent.change(screen.getByPlaceholderText('What are you promoting or writing about?'), {
      target: { value: 'Test Product' }
    });
    
    fireEvent.change(screen.getByPlaceholderText('Who is your email targeting?'), {
      target: { value: 'Test Audience' }
    });
    
    // Select purpose
    const purposeSelect = screen.getByLabelText('Email Purpose');
    fireEvent.change(purposeSelect, { target: { value: 'announcement' } });
    
    // Click generate button
    fireEvent.click(screen.getByText('Generate Email'));
    
    // Wait for the loading state to complete and preview to appear
    await waitFor(() => {
      expect(generateEmailCopy).toHaveBeenCalledWith(expect.objectContaining({
        purpose: 'announcement',
        product: 'Test Product',
        audience: 'Test Audience'
      }));
      
      expect(screen.getByText('Test Subject')).toBeInTheDocument();
      expect(screen.getByText('This is a test email body.')).toBeInTheDocument();
    });
  });
});