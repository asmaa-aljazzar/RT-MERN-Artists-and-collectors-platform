# Database Design

## User fields
- `username`: String, required, trimmed, lowercased, uniquely indexed; public user identity.
- `email`: String, required, trimmed, lowercased, uniquely indexed; private login identifier.
- `password`: String, required; stores the password hash used for authentication.
- `isArtist`: Boolean, default false; determines whether the user can publish artwork.
- `profileImage`: String, optional; stores the profile-image URL.
- `bio`: String, optional, trimmed, maximum 300 characters; stores a short public biography.
- Mongoose timestamps add `createdAt` and `updatedAt` automatically.

## Artwork fields

- `title`: String, required, trimmed, maximum 255 characters; stores the artwork name.
- `description`: String, optional, trimmed, maximum 2000 characters; stores the artwork's story, tools, or process.
- `imageUrl`: String, required; stores the location of the artwork image.
- `category`: String, required, trimmed, lowercased, restricted to `digital`, `ai-generated`, or `traditional`; supports consistent filtering.
- `tags`: Array of Strings, optional, trimmed, lowercased, maximum 10 unique tags and 30 characters per tag; supports flexible descriptions such as `gothic` or `autumn`.
- `artistId`: ObjectId, required, references User; identifies the artist who owns the artwork.
- `status`: Excluded from the MVP; every valid artwork is published immediately after creation.
- Mongoose timestamps add `createdAt` and `updatedAt` automatically.

## Interaction collections

### ArtworkLike

- `userId`: ObjectId, required, references User.
- `artworkId`: ObjectId, required, references Artwork.
- Unique compound index: userId + artworkId.

### ArtworkSave

- `userId`: ObjectId, required, references User.
- `artworkId`: ObjectId, required, references Artwork.
- Unique compound index: userId + artworkId.

## Relationships and indexes
- One User can create many Artworks; Artwork.artistId references User.
- Users and liked artworks have a many-to-many relationship through ArtworkLike.
- Users and saved artworks have a many-to-many relationship through ArtworkSave.
- User indexes: unique username and unique email.
- Artwork indexes: artistId, title text search, and category + createdAt.
- ArtworkLike: unique userId + artworkId; artworkId index for like lookups/counts.
- ArtworkSave: unique userId + artworkId; artworkId index for save lookups/counts.
