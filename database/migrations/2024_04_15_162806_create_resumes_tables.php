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
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('full_name');
            $table->string('contact_info')->nullable();
            $table->string('city')->nullable();
            $table->text('professional_goal')->nullable();
            $table->text('education')->nullable();
            $table->text('work_experience')->nullable();
            $table->text('skills')->nullable();
            $table->text('courses')->nullable();
            $table->text('languages')->nullable();
            $table->text('additional_info')->nullable();
            $table->integer('salary')->nullable();
            $table->integer('age')->nullable();
            $table->string('phone')->nullable();
            $table->string('email')->nullable();
            $table->string('github')->nullable();
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
