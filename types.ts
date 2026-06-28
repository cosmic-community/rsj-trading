export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicImage {
  url: string;
  imgix_url: string;
}

export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    name?: string;
    short_description?: string;
    full_description?: string;
    icon?: string;
    featured_image?: CosmicImage;
    starting_price?: string;
  };
}

export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    name?: string;
    role?: string;
    photo?: CosmicImage;
    bio?: string;
    email?: string;
  };
}

export interface CaseStudy extends CosmicObject {
  type: 'case-studies';
  metadata: {
    title?: string;
    client_name?: string;
    summary?: string;
    content?: string;
    results?: string;
    featured_image?: CosmicImage;
    related_services?: Service[];
  };
}

export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    quote?: string;
    client_name?: string;
    company?: string;
    role?: string;
    photo?: CosmicImage;
    rating?: number;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}