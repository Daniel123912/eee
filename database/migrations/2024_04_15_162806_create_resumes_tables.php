<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
{
    Schema::create('resumes', function (Blueprint $table) {
        $table->id();
        $table->foreignId('id_user')->constrained()->cascadeOnDelete()->cascadeOnUpdate();
        $table->string('name');
        $table->string('headline');
        $table->text('description')->nullable();
        $table->string('location')->nullable();
        $table->string('website')->nullable();
        $table->decimal('salary', 10, 2)->nullable();
        $table->integer('age')->nullable();
        $table->string('phone')->nullable();
        $table->string('email')->nullable();
        $table->string('facebook')->nullable();
        $table->string('google_plus')->nullable();
        $table->string('dribbble')->nullable();
        $table->string('pinterest')->nullable();
        $table->string('twitter')->nullable();
        $table->string('github')->nullable();
        $table->string('instagram')->nullable();
        $table->string('youtube')->nullable();
        $table->timestamps();
    });
}

/**
 * Reverse the migrations.
 */
public function down(): void
{
    Schema::dropIfExists('resumes');
}

};
